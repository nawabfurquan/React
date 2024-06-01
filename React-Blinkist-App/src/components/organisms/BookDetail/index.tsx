import { Box, Container, Divider } from "@mui/material";
import TypographyComponent from "../../atoms/Typography";
import data from "../../../assets/data/data.json";
import { Link } from "react-router-dom";
import { AccessTimeOutlined, ArrowForwardOutlined } from "@mui/icons-material";
import FilledButton from "../../molecules/FilledButton";
import NavButton from "../../molecules/NavButton";
import { styled } from "@mui/system";
import { useContext } from "react";
import statusContext from "../../../assets/context/statusContext";
import nameContext from "../../../assets/context/nameContext";

const FlexContainer = styled(Container)({
  height: "60vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
});

const BookDetailView = () => {
  const { setStatus } = useContext(statusContext);
  const { setName } = useContext(nameContext);

  return (
    <Container sx={{ height: "80vh", mt: "8vh" }} data-testid="bookDetail">
      <FlexContainer>
        <Box sx={{ mb: -4 }}>
          <TypographyComponent
            variant="body2"
            children={data.bookDetail.head}
            color="textColors.highEmphasis"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "20vh",
            justifyContent: "space-between",
          }}
        >
          <TypographyComponent
            variant="h1"
            children={data.bookDetail.name}
            color="textColors.highEmphasis"
          />
          <TypographyComponent
            variant="subtitle1"
            children={data.bookDetail.caption}
            color="textColors.highEmphasis"
          />
          <TypographyComponent
            variant="body1"
            children={data.bookDetail.author}
            color="textColors.mediumEmphasis"
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
            }}
          >
            <AccessTimeOutlined
              sx={{
                color: "textColors.mediumEmphasis",
                fontSize: "2.5vh",
                mr: 0.5,
                mb: "1px",
              }}
            />
            <TypographyComponent
              variant="body2"
              children={data.bookDetail.read}
              color="textColors.mediumEmphasis"
            />
          </Box>
        </Box>
        <Box sx={{ alignSelf: "flex-end", position: "absolute", mt: 5 }}>
          <img src={data.bookDetail.img} alt="Book" />
        </Box>
        <Box
          sx={{
            width: "50%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <FilledButton
            textColor="primary.500"
            children="Read now"
            bgcolor="background.default"
            isBorder={true}
            borderColor="black"
            textVariant="body1"
            hoverColor="primary.500"
            hoverTextColor="background.default"
          />
          <Link to="/" style={{ textDecoration: "none" }}>
            <FilledButton
              textColor="textColors.highEmphasis"
              children="Finished Reading"
              bgcolor="primary.300"
              textVariant="body1"
              onClick={() => {
                setName(data.bookDetail.name);
                setStatus("finished");
              }}
            />
          </Link>
          <NavButton
            textColor="textColors.mediumEmphasis"
            textVariant="body1"
            children="Send to Kindle"
            postElement={<ArrowForwardOutlined fontSize="small" />}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "36vw",
          }}
        >
          <Box sx={{ display: "flex", mb: 3 }}>
            {data.bookDetail.buttons.map((button, index) => (
              <Box
                key={index}
                sx={{
                  borderBottomColor: button.borderColor,
                  borderBottomWidth: "1px",
                  borderBottomStyle: "solid",
                  width: "12vw",
                  cursor: "pointer",
                  pb: 1,
                }}
              >
                <TypographyComponent
                  variant="body2"
                  color={button.textColor}
                  children={button.name}
                />
              </Box>
            ))}
          </Box>
          <TypographyComponent
            variant="body2"
            children={data.bookDetail.summary}
            color="textColors.highEmphasis"
          />
        </Box>
      </FlexContainer>
      <Divider sx={{ width: "100%", mt: 10 }} />
    </Container>
  );
};

export default BookDetailView;
