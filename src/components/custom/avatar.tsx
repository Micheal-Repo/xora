import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from "@/components/ui/avatar"


export default function AvatarComp({
  src,
  fallback
}: {
  src: string,
  fallback: string
}) {
  return (
    <Avatar>
      <AvatarImage src={src} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  )
}