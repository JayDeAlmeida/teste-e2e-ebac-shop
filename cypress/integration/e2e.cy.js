/// <reference types="cypress" />
import variacoes from '../support/page_objects/e2e.page'
const variaveis = require('../fixtures/e2e.json')

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/')
        cy.get('#primary-menu > .menu-item-629 > a').click()
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        cy.get('.products > .row').contains('Abominable Hoodie').click()
        variacoes.escolherVariacoes(variaveis[0].tamanho, variaveis[0].cor, variaveis[0].quantidade)
        cy.get('.tbay-woocommerce-breadcrumb > :nth-child(2) > a').click()
        cy.get('.products > .row').contains('Ajax Full-Zip Sweatshirt').click()
        variacoes.escolherVariacoes(variaveis[1].tamanho, variaveis[1].cor, variaveis[1].quantidade)
        cy.get('.tbay-woocommerce-breadcrumb > :nth-child(2) > a').click()
    // aqui apresentou erro pois o produto está fora de estoque, então decidi repetir o primeiro produto utilizando os dados do segundo
    // conjunto para ter itens variados.
        cy.get('.products > .row').contains('Abominable Hoodie').click()
        variacoes.escolherVariacoes(variaveis[1].tamanho, variaveis[1].cor, variaveis[1].quantidade)
        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()
        cy.get('.showlogin').click()
        variacoes.login('aluno_ebac@teste.com', 'teste@teste.com')
        cy.get('#terms').check()
        cy.get('#place_order').click()
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')


    });


})