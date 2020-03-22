import React from 'react';

import { Container } from './styles';

export default function Footer() {
  return (
    <Container>
      <div>
        <div className="logo">Co.</div>
        <div className="midias">
          <ul>
            <li className="midia">
              <i className="fa fa-facebook" />
            </li>
            <li className="midia">
              <i className="fa fa-google-plus" />
            </li>
            <li className="midia">
              <i className="fa fa-instagram" />
            </li>
            <li className="midia">
              <i className="fa fa-twitter" />
            </li>
          </ul>
        </div>
        <span>© 2020 Co.</span>
      </div>
    </Container>
  );
}
