import { useEffect, useState } from "react"
import { ImageProps } from "../../../types/IHtmlPropsType"
import Skeleton from "react-loading-skeleton"
import ImageStyled from "./Img.styled"
import imageAvailable from "../../../theme/assets/Images/no-image-available.jpg"

const Img = (props: ImageProps) => {
  const [imgSrc, setImgSrc] = useState<string | undefined>()

  useEffect(() => {
    if (!props.src) return

    const img: HTMLImageElement = new Image()
    img.src = props.src

    function loadImag() {
      setImgSrc(props.src)
    }

    function errorLoad() {
      setImgSrc(`${imageAvailable}`)
    }

    img.addEventListener("load", loadImag)
    img.addEventListener("error", errorLoad)

    return () => {
      img.removeEventListener("load", loadImag)
      img.removeEventListener("error", errorLoad)
    }
  }, [props.src])

  return (
    <>
      {imgSrc ? (
        <ImageStyled {...props} src={imgSrc} />
      ) : (
        <Skeleton className={props.classPlaceholder} />
      )}
    </>
  )
}

export default Img
