const articles = [
    { category:"JS", title: "Title1", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dolor dolor, dignissim sit amet molestie at, commodo ut odio. Suspendisse pharetra ex quis dui aliquet aliquam." },
    { category:"CSS", title: "Title2", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dolor dolor, dignissim sit amet molestie at, commodo ut odio. Suspendisse pharetra ex quis dui aliquet aliquam."  },
    { category:"HTML", title: "Title3", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dolor dolor, dignissim sit amet molestie at, commodo ut odio. Suspendisse pharetra ex quis dui aliquet aliquam."  }
 
];
  
  const listArticles = () => {
    articles.map((article) => {
      console.log(article.category," ",article.title," ", article.content);
    });
  };
  
  // listBooks();
  
  let addArticle=(newArticle)=>{

    const promise1= new Promise((resolve, reject) => {
        articles.push(newArticle);
        resolve(articles);
        reject('bir hata oluştu')
    })
    return promise1;
  }; 
  
  addArticle( {category:"SQL", title: "Title4", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dolor dolor, dignissim sit amet molestie at, commodo ut odio. Suspendisse pharetra ex quis dui aliquet aliquam."  }, listArticles)
        .then(()=>{
            console.log("yeni liste");
            listArticles();
        }).catch((error)=>{
            console.log(error);
        })