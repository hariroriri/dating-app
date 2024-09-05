export const login = async (email, password) => {
    // Mock login service
    return new Promise((resolve, reject) => {
      if (email === 'test@test.com' && password === 'password') {
        resolve({ token: '1234567890' });
      } else {
        reject('Invalid credentials');
      }
    });
  };
  
  export const signup = async (email, password) => {
    // Mock signup service
    return new Promise((resolve, reject) => {
      if (email && password) {
        resolve({ token: '0987654321' });
      } else {
        reject('Invalid data');
      }
    });
  };
  