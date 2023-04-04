import { createContext, useState } from 'react';

export const AccountContext = createContext(null);


const AccountProvider = ({children}) => {
    const [account, setAccount] = useState();
  return (
    
    <div>
        
      <AccountContext.Provider
        value={{
          account,
          setAccount,
        }}
      >
        {children}
      </AccountContext.Provider>
    </div>
  );
};

export default AccountProvider;
