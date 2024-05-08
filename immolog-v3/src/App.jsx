import React, { useState } from 'react'


function App() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email === '' || formData.password === '') {
      alert('Por favor, preencha todos os campos');
      return;
    }
    if(formData.password.length < 8){
      alert('Por favor, a senha deve ter mais de 8 caracteres.');
    }
    console.log('Formulário enviado:', formData);
  };


  return (
    <>
      <div className="h-screen">
      <div className="flex h-full flex-col justify-center px-6 py-12 lg:px-8 bg-zinc-950">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm text-4xl text-white mt-10 text-center text-2xl font-medium	 leading-9 tracking-tight text-white">
          IMMO<span className='text-violet-600'>LOG</span>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                Email address
              </label>
              <div className="mt-2">
                <input
                   value={formData.email}
                  id="email"
                  name="email"
                  type="email"
                  onChange={handleChange}
                  autoComplete="email"
                  required
                  className="block focus:outline-none w-full rounded-md border-0 py-1.5 text-white pl-2 bg-zinc-950 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-violet-600 hover:text-violet-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  value={formData.password}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-0 pl-2 py-1.5 text-white bg-zinc-950 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <button
              onClick={handleSubmit}
                type="submit"
                className="flex w-full justify-center rounded-md bg-violet-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a href="#" className="font-semibold leading-6 text-violet-600 hover:text-violet-500 font-bold		">
             Sing On
            </a>
          </p>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
