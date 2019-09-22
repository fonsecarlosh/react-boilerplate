import AuthRepository from '../Repositories/AuthRepository';

class AuthService {
  constructor(authRepository = new AuthRepository()) {
    this.authRepository = authRepository;
  }

  async login({ acessKey }) {
    try {
    
      if(!acessKey) {
        return Promise.reject("Usuario Invalido");
      }
      
      const { data } = await this.authRepository.post({ acessKey });
      return Promise.resolve(data);
    } catch (err) {
      return Promise.reject(err);
    }
  }
}

export default AuthService;