fetch(
  'https://newsapi.org/v2/everything?q=tesla&from=2022-06-26&sortBy=publishedAt&apiKey=24dc2ebb51ae44b595d495bce73cfed0'
).then((res) => {
  res.json().then((data) => {
    let tbData = data.articles;
    console.log(tbData);

    if (tbData.length > 0) {
      var temp = '';
      tbData.forEach((itemData) => {
     
        temp += '<tr>';
        temp += '<td>' + `<img src=${itemData.urlToImage} width="100" height="100" alt=${itemData.source.name} >` + '</td>';
        temp += '<td>' + itemData.source.name + '</td>';
        temp += '<td>' + itemData.title + '</td>';
        temp += '<td>' + itemData.content + '</td>';
        temp += '<td>' + itemData.description + '</td>';
        temp += '<td>' + `<a href=${itemData.url} target="_blank">More Detail</a>` + '</td>';
        temp += '<td>' + itemData.publishedAt + '</td></tr>';
      });
      document.getElementById('data').innerHTML = temp;
    }
  });
});
