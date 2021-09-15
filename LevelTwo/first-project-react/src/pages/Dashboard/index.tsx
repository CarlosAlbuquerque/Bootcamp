// eslint-disable-next-line no-use-before-define
import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/githubExplorer.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="" />
    <Title>Explore repositórios no GitHub</Title>

    <Form>
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="https://github.com/">
        <img src="https://avatars.githubusercontent.com/u/55409050?v=4" alt="Carlos" />
        <div>
          <strong>React Carlos</strong>
          <p>Easy peasy React JS</p>
        </div>
        <FiChevronRight size={20} />
      </a>

      <a href="https://github.com/">
        <img src="https://avatars.githubusercontent.com/u/55409050?v=4" alt="Carlos" />
        <div>
          <strong>React Carlos</strong>
          <p>Easy peasy React JS</p>
        </div>
        <FiChevronRight size={20} />
      </a>

      <a href="https://github.com/">
        <img src="https://avatars.githubusercontent.com/u/55409050?v=4" alt="Carlos" />
        <div>
          <strong>React Carlos</strong>
          <p>Easy peasy React JS</p>
        </div>
        <FiChevronRight size={20} />
      </a>

    </Repositories>
  </>
);

export default Dashboard;
