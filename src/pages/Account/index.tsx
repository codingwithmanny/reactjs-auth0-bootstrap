// IMPORTS
// ------------------------------------------------------------
import React from 'react';
import {useAuth0} from '@auth0/auth0-react';

// Layout Component
import DashboardLayout from '../../layouts/Dashboard';

// Styled Components
import {AccountPageStyles} from './styles';

// MAIN PAGE COMPONENT
// ------------------------------------------------------------
const AccountPage = () => {
  const {user} = useAuth0();

  return (
    <DashboardLayout>
      <AccountPageStyles>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <h2>Account</h2>
              <hr />
              {user ? (
                <figure className="figure">
                  <img src={user.picture} className="rounded" alt={user.nickname}></img>
                  <figcaption className="figure-caption">{user.nickname}</figcaption>
                </figure>
              ) : null}
              <pre>
                <code>{JSON.stringify(user, null, ' ')}</code>
              </pre>
            </div>
          </div>
        </div>
      </AccountPageStyles>
    </DashboardLayout>
  );
};

// EXPORTS
// ------------------------------------------------------------
export default AccountPage;
