import React, { useContext } from "react";
import { Container, Grid, Box, Tabs, Tab } from "@mui/material";
import data from "../../../assets/data/data.json";
import TypographyComponent from "../../atoms/Typography";
import { styled } from "@mui/system";
import BookCard from "../../molecules/BookCard";
import statusContext from "../../../assets/context/statusContext";
import nameContext from "../../../assets/context/nameContext";

interface LibraryProps {}

const RootContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
});

const Library: React.FC<LibraryProps> = () => {
  const { status, setStatus } = useContext(statusContext);
  const { name } = useContext(nameContext);

  const finishedBook = data.selectedPage[0].books.filter(
    (book) => book.book.bookName === name
  );

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setStatus(newValue);
  };

  return (
    <RootContainer data-testid="library">
      <Box sx={{ width: "95%", ml: 4 }}>
        <TypographyComponent
          variant="h1"
          children="My Library"
          color="textColors.highEmphasis"
        />
        <Box
          mt={6}
          sx={{
            borderBottom: "2px solid #F1F6F4",
            width: "100%",
            zIndex: 0,
          }}
        >
          <Tabs value={status} onChange={handleChange} sx={{ zIndex: 1 }}>
            <Tab
              value="reading"
              label={
                <Box sx={{ width: "100%" }}>
                  <TypographyComponent
                    variant="subtitle2"
                    children="Currently reading"
                  />
                </Box>
              }
              sx={{
                width: "25vw",
                textTransform: "none",
                borderBottom: "2px solid #E1ECFC",
              }}
              onClick={() => setStatus("reading")}
            />
            <Tab
              value="finished"
              label={
                <Box sx={{ width: "100%" }}>
                  <TypographyComponent
                    variant="subtitle2"
                    children="Finished"
                  />
                </Box>
              }
              sx={{
                width: "25vw",
                textTransform: "none",
                borderBottom: "2px solid #E1ECFC",
              }}
              onClick={() => setStatus("finished")}
            />
          </Tabs>
        </Box>
        {status === "reading" ? (
          <Grid container mt={1} spacing={5}>
            {data.books.map((book, index) => (
              <Grid item xs={4} key={index}>
                <BookCard book={book} />
              </Grid>
            ))}
          </Grid>
        ) : (
          name !== "" && (
            <Grid container mt={1} spacing={5}>
              <Grid item xs={4}>
                <BookCard book={finishedBook[0].book} />
              </Grid>
            </Grid>
          )
        )}
      </Box>
    </RootContainer>
  );
};

export default Library;
