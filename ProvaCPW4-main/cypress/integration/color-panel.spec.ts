describe('Color Panel', () => {
    it('should change color when all parameter inputs are set', () => {
      // Visite a página com o Color Panel
      cy.visit('http://localhost:3000');
  
      // Altere os valores dos 4 inputs de parâmetros
      cy.get('#input-red').clear().type('128');
      cy.get('#input-green').clear().type('255');
      cy.get('#input-blue').clear().type('0');
      cy.get('#input-alpha').clear().type('1');
  
      // Espere que a cor do painel seja atualizada
      cy.get('#color-panel').should('have.css', 'background-color', 'rgba(128, 255, 0, 1)');
    });
  });