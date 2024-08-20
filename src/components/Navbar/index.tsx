import * as S from "./styles";
import User from "@/components/User";

const Navbar = () => {
    return (
        <S.Container>
            <div className='bell'>
                <div className='notification'>1</div>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="22" fill='#FFF'
                     viewBox="0 0 72 72">
                    <path
                        d="M28.802 58h14.396c-1.504 2.398-4.165 4-7.198 4S30.307 60.398 28.802 58zM58.328 39.781C58.602 40.191 61 43.963 61 50c0 2.209-1.791 4-4 4H15c-2.209 0-4-1.791-4-4 0-6.037 2.398-9.809 2.672-10.219.414-.621.975-1.158 1.672-1.422 3.459-1.314 3.764-8.46 3.98-10.517.607-5.776 3.732-11.143 10.801-13.383C31.28 12.525 33.267 11 36 11c2.738 0 4.728 1.531 5.882 3.471 4.343 1.198 10.329 5.748 10.794 13.371.151 2.483.665 9.081 3.98 10.517C57.355 38.662 57.914 39.16 58.328 39.781z"></path>
                </svg>
            </div>
            <User/>
        </S.Container>
    );
};

export default Navbar;
