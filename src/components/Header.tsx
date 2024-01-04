const Header = () => {
    return (
        <header className="sticky w-full">
                <section className="px-16 w-1200px mx-auto h-16 flex justify-between items-center">
                    <div className="flex items-center">
                        <h1 className="font-extrabold">
                            나 헤더요
                        </h1>
                    </div>
                    <div className="flex items-center">
                        <a className="flex ml-4 text-white bg-black w-20 h-10 items-center justify-center rounded-md cursor-pointer"><span>로그인</span></a>
                    </div>
                </section>
        </header>
    );
}

export default Header;