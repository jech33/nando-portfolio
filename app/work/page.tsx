import ArrowNavigation from "../_ui/Core/ArrowNavigation";
import NandoLayout from "../_ui/NandoLayout";
import { nandoImages } from "../_utils/nandoAssets";

export default function Work() {
  return (
    <NandoLayout images={nandoImages.work}>
      WORK
      <ArrowNavigation hrefNext="/" hrefBack="/about" />
    </NandoLayout>
  );
}
