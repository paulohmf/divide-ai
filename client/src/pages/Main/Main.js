import logo from './logo.svg';
import './Main.css';

function Main() {
  return (
    <div >
      <div class="header">
        <div class="user-info">
          <div class="user-name">Nome do Usuário</div>
          <div class="user-avatar"></div>
        </div>
        <button class="new-item-button">Novo Item</button>
      </div>
      <div class = "group-list">
        <div class="item-list">
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
      </div>
      <div class="div-button">
        <button class="summary-button">Resumo</button>
      </div>
    </div>
  );
}

export default Main;
