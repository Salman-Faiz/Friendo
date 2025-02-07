import authImg from '../assets/images/friendo.webp'

const LoginPage = () => {
     return (
       <div>
         <main className="flex min-h-screen items-center justify-center bg-deepDark py-8">
           <div className="max-w-[1368px] flex-1">
             <div className="container grid items-center gap-8 lg:grid-cols-2">
               <div>
                 <img
                   className="mb-12 max-w-full max-lg:hidden h-80 mt-24"
                   src={authImg}
                   alt="auth_illustration"
                 />
                 <div>
                   <h1 className="mb-3 text-4xl font-bold lg:text-[40px]">Friendo</h1>
                   <p className="max-w-[452px] text-gray-600/95 lg:text-lg">
                   Build a social media app with features such as displaying posts, viewing post details, adding reactions, leaving comments, and managing user profiles.
                   </p>
                 </div>
               </div>
   
               <div className="card">
                 <form className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]">
                   <div className="form-control">
                     <label className="auth-label" htmlFor="email">Email</label>
                     <input
                       className="auth-input"
                       name="email"
                       type="email"
                       id="email"
                     />
                   </div>
   
                   <div className="form-control">
                     <label className="auth-label" htmlFor="password">Password</label>
                     <input
                       className="auth-input"
                       name="password"
                       type="password"
                       id="password"
                     />
                   </div>
   
                   <button
                     className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
                     type="submit"
                   >
                     Login
                   </button>
                 </form>
                 <div className="py-4 lg:py-6">
                   <p className="text-center text-xs text-gray-600/95 lg:text-sm">
                     Don’t have account?
                     <a
                       className="text-white transition-all hover:text-lwsGreen hover:underline"
                       href="/registration.html"
                     >
                       Create New
                     </a>
                   </p>
                 </div>
               </div>
             </div>
           </div>
         </main>
       </div>
     );
   };
   
   export default LoginPage;
   