

const LoginRegisterForm = ({email, setEmail, password, setPassword, onSubmit, formType}:any) => {
  return (
        <form onSubmit={onSubmit} className={"flex flex-col place-items-center p-[10%]"}>
            <fieldset className={"p-[1%]"}>
                <label htmlFor="email">Email </label>
                <input type="email" name="email" id="email" value={email} onChange={(event) => {setEmail(event.target.value)}} />
            </fieldset>

            <fieldset className={"p-[1%]"}>
                <label htmlFor="password">Password </label>
                <input type="password" name="password" id="password" value={password} onChange={(event) => {setPassword(event.target.value)}}/>
            </fieldset>

            <fieldset className={"border text-[1em] font-medium bg-[#1a1a1a] cursor-pointer transition-[border-color] duration-[0.25s] px-[1.2em] py-[0.6em] rounded-lg border-solid border-transparent hover:border-[#646cff]"}>
            <button type="submit">{formType}</button>
            </fieldset>
        </form>
    )
}

export default LoginRegisterForm;