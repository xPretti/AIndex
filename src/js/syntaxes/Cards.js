function getCardSyntax(element) {
  return `
          <div class="card">
              <h3 class="card-price">${element.price}</h3>
              <div class="card-image">
                  <img src=${element.img} alt="Nome da Tecnologia">
              </div>
              <div class="card-content">
                  <div class="card-title">
                      <h3>${element.name}</h3>
                      <h4>${element.categoryName}</h4>
                  </div>
                  <p>${element.info}</p>
              </div>
              <div class="card-footer">
                  <a href="${element.link}" target="_blank" class="card-more-btn">Conhecer</a>
              </div>
          </div>
    `;
}
