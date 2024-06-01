import {
  AccessTimeOutlined,
  AddOutlined,
  MoreHoriz,
  PersonOutlined,
} from "@mui/icons-material";
import { Card, CardMedia, Box, CardContent } from "@mui/material";
import { styled } from "@mui/system";
import { useContext } from "react";
import TypographyComponent from "../../atoms/Typography";
import FilledButton from "../FilledButton";
import statusContext from "../../../assets/context/statusContext";

interface CardProps {
  book: {
    img: string;
    bookName: string;
    bookAuthor: string;
    time: string;
    reads: string;
  };
  showAdd?: boolean;
}

const StyledCardContent = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
  height: "5%",
});

const IconBoxContainer = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
});

const IconBox = styled(Box)({
  display: "flex",
  alignItems: "flex-start",
});

const BookCard: React.FC<CardProps> = ({ book, showAdd = false }) => {
  const { status } = useContext(statusContext);

  const checkStatus = () => {
    if (status === "reading") {
      return (
        <>
          <img
            src="./images/Rectangle 6.png"
            alt="Rectangle"
            style={{ width: "100%", height: "15px" }}
          />
          <img
            src="./images/Rectangle 7.png"
            alt="Small Rectangle"
            style={{ position: "absolute", height: "15px" }}
          />
        </>
      );
    } else {
      return (
        <img
          src="./images/Rectangle 10.png"
          alt="Small Full Rectangle"
          style={{ width: "100%", height: "15px" }}
        />
      );
    }
  };
  return (
    <Box data-testid="bookCard">
      <Card
        sx={{
          border: "1px solid #E1ECFC",
          bgcolor: "background.default",
          cursor: "pointer",
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
          "&:hover": { bgcolor: "background.paper" },
        }}
      >
        <CardMedia component="img" src={book.img} sx={{ width: "101%" }} />
        <StyledCardContent sx={{ mt: 2 }}>
          <TypographyComponent
            variant="subtitle2"
            color="textColors.highEmphasis"
            children={book.bookName}
          />
          <Box sx={{ my: 1.5 }}>
            <TypographyComponent
              variant="body1"
              color="textColors.mediumEmphasis"
              children={book.bookAuthor}
            />
          </Box>
          <IconBoxContainer>
            <IconBox>
              <Box>
                <AccessTimeOutlined
                  sx={{
                    color: "textColors.mediumEmphasis",
                    fontSize: "2vh",
                    mr: 0.5,
                    mt: "1px",
                  }}
                />
              </Box>
              <TypographyComponent
                variant="caption"
                color="textColors.mediumEmphasis"
                children={book.time}
              />
            </IconBox>
            {book.reads && (
              <IconBox>
                <PersonOutlined
                  sx={{ color: "textColors.mediumEmphasis", fontSize: "2vh" }}
                />
                <TypographyComponent
                  variant="caption"
                  color="textColors.mediumEmphasis"
                  children={book.reads}
                />
              </IconBox>
            )}
          </IconBoxContainer>
          {!showAdd && (
            <Box sx={{ alignSelf: "flex-end", mt: 1, mb: -3 }}>
              <MoreHoriz />
            </Box>
          )}
        </StyledCardContent>
      </Card>
      {showAdd ? (
        <FilledButton
          children="Add to library"
          textVariant="body1"
          textColor="secondary.500"
          bgcolor="background.default"
          preElement={<AddOutlined fontSize="small" sx={{ mr: 2 }} />}
          isBorder={false}
          width="100%"
          height="52px"
          hoverColor="secondary.500"
          hoverTextColor="background.default"
        />
      ) : (
        <Box sx={{ display: "flex" }}>{checkStatus()}</Box>
      )}
    </Box>
  );
};

export default BookCard;
