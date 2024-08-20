import {ReactNode, useEffect, useRef, useState} from 'react';
import * as S from "./styles";

const UexDropDown = ({
                         target,
                         content,
                         isOpen,
                         setIsOpen,
                     }: {
    target?: ReactNode;
    content?: ReactNode;
    isOpen: boolean;
    setIsOpen: (arg: boolean) => void;
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const targetRef = useRef<HTMLDivElement>(null);
    const [targetHeight, setTargetHeight] = useState(10);

    useEffect(() => {
        function handleClickOutside(event: any) {
            const isOutsideDocumentElement =
                ref.current && !ref.current.contains(event.target);

            if (isOutsideDocumentElement) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <S.Container ref={ref}>
            <div ref={targetRef}>{target}</div>
            {isOpen && content && (
                <div
                    className='box'>
                    <div className="absolute -top-2 right-10 m-auto w-4 h-4 bg-white polygon"></div>
                    <div>{content}</div>
                </div>
            )}
        </S.Container>
    );
};

export default UexDropDown;
