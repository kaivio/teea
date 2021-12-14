import feather from "feather-icons";

export default function Feather({ i }) {
  return (
    <span
      dangerouslySetInnerHTML={{
        __html: feather.icons[i].toSvg()
      }}>
    </span>
  )
}