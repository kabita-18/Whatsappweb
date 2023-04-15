import { createContext, useState } from 'react';

export const AccountContext = createContext(null);


const AccountProvider = ({children}) => {
    const [account, setAccount] = useState();
    const [person, setPerson] = useState({});
  return (
    
    <div>
        
      <AccountContext.Provider
        value={{
          account,
          setAccount,
          person,
          setPerson
        }}
      >
        {children}
      </AccountContext.Provider>
    </div>
  );
};

export default AccountProvider;
