import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import data from "../../../assets/data/data.json";
import TypographyComponent from "../../atoms/Typography";
import Banner from "../../molecules/Banner";
import BookCard from "../../molecules/BookCard";
import InputField from "../../molecules/InputField";

interface Props {}

const SelectedPageContent: React.FC<Props> = () => {
  return (
    <Container
      data-testid="pageContent"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-around",
      }}
    >
      <Banner />
      <Box sx={{ mt: 8 }}>
        <InputField
          url="images/search.png"
          alt="Search"
          text="Search by title or author"
        />
      </Box>

      {data.selectedPage.map((content) => (
        <Box width="100%" sx={{ mt: 15 }}>
          <Box sx={{ mb: 4 }}>
            <TypographyComponent
              variant="subtitle1"
              children={content.title}
              color="textColors.highEmphasis"
            />
          </Box>
          <Grid container spacing={5}>
            {content.books.map((book, index) => (
              <Grid item xs={4} key={index}>
                {index === 1 ? (
                  <Link to="/detail" style={{ textDecoration: "none" }}>
                    <BookCard
                      book={book.book}
                      showAdd={Boolean(book.showAdd)}
                    />
                  </Link>
                ) : (
                  <BookCard book={book.book} showAdd={Boolean(book.showAdd)} />
                )}
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Container>
  );
};

export default SelectedPageContent;
