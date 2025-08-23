export const HeaderLogo = () => {
  return (
    <div className="flex items-center gap-2">
        <img
            src='/logo.png'
            alt='logo'
            className='h-10 w-10 object-contain drop-shadow-md'
        />
        <p className="font-bold text-white text-3xl ml-1 font-mono">RAGify</p>
    </div>
  )
}
