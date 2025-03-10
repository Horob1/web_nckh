import {
  AvatarImage,
  Avatar as AvatarDefault,
  AvatarFallback,
} from "./ui/avatar";

export const Avatar = ({ url }: { url: string }) => {
  return (
    <AvatarDefault>
      <AvatarImage src={url} />
      <AvatarFallback>CN</AvatarFallback>
    </AvatarDefault>
  );
};
