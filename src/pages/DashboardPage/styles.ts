import styled from "styled-components";

const DashBoardContent = styled.section`
  min-height: 100vh;
  background-color: var(--color-white);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DashboardContainer = styled.section`
  width: 85%;
  max-width: 1200px;
  min-height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .charts {
    width: 100%;
  }

  .habbitsResume__content { // mexer aqui para mudar o tamanho do gráfico. Não colocar div em volta do componente.
    width: 85%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  .habbitInfo {
    width: 100%;
    background-color: white;
    border-radius:var(--border-default);
    padding: 16px;
  }
`;
export { DashboardContainer, DashBoardContent };
