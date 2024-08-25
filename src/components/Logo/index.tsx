import Image from "next/image"

export interface LogoProps {
  size?: 'medium' | 'large'
  align?: 'horizontal' | 'vertical'
  color?: 'black' | 'white'
  justIcon?: boolean
}

export const Logo = ({ size = 'medium', align='horizontal', color='black', justIcon=false }: LogoProps) => {
  const [sizeXImage, sizeYImage] = size === 'medium' ? [110, 25] : [158,36]
  const colorImage = color === 'black' ? 'Black' : 'White'
  const pathImage = 
    justIcon ? '/assets/LogoIcon.png' : 
      (align === 'vertical' ? '/assets/LogoVerticalBlack.png' :  `/assets/LogoHorizontal${colorImage}.png`)
     
  return (
    <>
      {justIcon ? (
        <Image
          src={pathImage}
          alt="Logo"
          width={46}
          height={36}
        />
      ) : (align === 'vertical' ? (
        <Image
          src={pathImage}
          alt="Logo"
          width={190}
          height={214}
        /> 
      ) : (
        <Image
          src={pathImage}
          alt="Logo"
          width={sizeXImage}
          height={sizeYImage}
        />
      ))}
    </>
  )
}