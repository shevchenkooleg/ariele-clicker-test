import { cy, it, describe } from 'local-cypress'

const credentialData1 = {
    firstName: 'Олег',
    lastName: 'Шевченко',
    phone: '79382946454',
    email: 'orion20041987@gmail.com',
    postAddress: 'СДЭК, г.Сочи, ул.Макаренко 34/18',
}
const credentialData2 = {
    firstName: 'Валентина',
    lastName: 'Федорова',
    phone: '79184001186',
    email: 'froska85@yandex.ru',
    postAddress: 'СДЭК, г.Сочи, ул.Макаренко 34/18',
}

describe('Visit selling page Ariel-shop', () => {
    beforeEach(() => {
        cy.visit(`http://localhost:3001/`)
    })
    it('Visit selling page Ariel-shop and by a tree-toy for user1', () => {

        const {firstName, lastName, phone, email, postAddress} = credentialData1

        // cy.get('button').should('contains.text', 'Добавить в корзину').click()
        cy.contains('Добавить в корзину').should("not.be.disabled").click()
        cy.contains('Оформить заявку').should("not.be.disabled").click()
        cy.get('input[name=surname]').type(lastName)
        cy.get('input[name=name]').type(firstName)
        cy.get('input[name=phone]').type(phone)
        cy.get('input[name=email]').type(email)
        cy.get('textarea[name=formComment]').type(postAddress)
        // cy.get('input[type=checkbox]').should('be.checked')
        cy.get('input[type=checkbox]').then(($input)=>{
            if ($input.is(':checked')){
                console.log('do not touch checkbox')
            } else {
                console.log('touching checkbox')
                cy.get('input[type=checkbox]').click()
            }
        })
        cy.get('button[type=submit]').click()
        // cy.contains('Оформить заявку').should("not.be.disabled").click()
    })
    it('Visit selling page Ariel-shop and by a tree-toy for user1', () => {

        const {firstName, lastName, phone, email, postAddress} = credentialData2

        // cy.get('button').should('contains.text', 'Добавить в корзину').click()
        cy.contains('Добавить в корзину').should("not.be.disabled").click()
        cy.contains('Оформить заявку').should("not.be.disabled").click()
        cy.get('input[name=surname]').type(lastName)
        cy.get('input[name=name]').type(firstName)
        cy.get('input[name=phone]').type(phone)
        cy.get('input[name=email]').type(email)
        cy.get('textarea[name=formComment]').type(postAddress)
        // cy.get('input[type=checkbox]').should('be.checked')
        cy.get('input[type=checkbox]').then(($input)=>{
            if ($input.is(':checked')){
                console.log('do not touch checkbox')
            } else {
                console.log('touching checkbox')
                cy.get('input[type=checkbox]').click()
            }
        })
        cy.get('button[type=submit]').click()
        // cy.contains('Оформить заявку').should("not.be.disabled").click()
    })
})