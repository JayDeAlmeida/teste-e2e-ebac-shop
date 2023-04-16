class Variacoes{

escolherVariacoes(tamanho, cor, quantidade){
    cy.get('.button-variable-item-' + tamanho).click()
    cy.get('.button-variable-item-' + cor).click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()
    }

login(usuario, senha) {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha)
    cy.get('.woocommerce-button').click()
}

}

export default new Variacoes