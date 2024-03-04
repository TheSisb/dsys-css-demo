import Image from "next/image";
import {Box} from './Box'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Box borderRadius="borderRadiusCircle" backgroundColor="colorBackgroundAvailable" _hover={{backgroundColor: 'colorBackground'}}>I am a box</Box>
    </main>
  );
}
