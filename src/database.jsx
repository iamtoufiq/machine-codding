export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/books") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            booksData: [
              {
                id: 1,
                title: "Book 1",
                author: "Author 1",
                image: "book1.jpg",
                category: "Read",
              },
              {
                id: 2,
                title: "Book 2",
                author: "Author 2",
                image: "book2.jpg",
                category: "Read",
              },
              {
                id: 3,
                title: "Book 3",
                author: "Author 3",
                image: "book3.jpg",
                category: "Read",
              },
              {
                id: 4,
                title: "Book 4",
                author: "Author 4",
                image: "book4.jpg",
                category: "Currently Reading",
              },
              {
                id: 5,
                title: "Book 5",
                author: "Author 5",
                image: "book5.jpg",
                category: "Currently Reading",
              },
              {
                id: 6,
                title: "Book 6",
                author: "Author 6",
                image: "book6.jpg",
                category: "Currently Reading",
              },
              {
                id: 7,
                title: "Book 7",
                author: "Author 7",
                image: "book7.jpg",
                category: "Want to Read",
              },
              {
                id: 8,
                title: "Book 8",
                author: "Author 8",
                image: "book8.jpg",
                category: "Want to Read",
              },
              {
                id: 9,
                title: "Book 9",
                author: "Author 9",
                image: "book9.jpg",
                category: "Want to Read",
              },
            ],
          },
        });
      } else {
        reject({
          status: 404,
          message: "No users Found",
        });
      }
    }, 2000);
  });
};
