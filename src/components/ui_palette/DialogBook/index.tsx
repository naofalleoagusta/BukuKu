import useDialogBookStore from "@/hooks/useDialogBookStore";
import { cx } from "class-variance-authority";
import Dialog from "../Dialog";
import Image from "../Image";

const DialogBook = () => {
  const { dialogBook, toggleDialogBook } = useDialogBookStore();
  return (
    <Dialog
      handleClose={toggleDialogBook}
      body={
        !!dialogBook && (
          <div className={cx("grid md:grid-cols-2", "gap-6", "overflow-auto")}>
            <div>
              <Image
                src={dialogBook.cover_url}
                placeholderSrc={dialogBook.cover_url}
                effect="black-and-white"
              />
            </div>
            <div className="flex flex-col gap-1 h-full">
              <h3 className="pr-[40px] mb-1">{dialogBook.title}</h3>
              <p className="text-sm">Audio length : {dialogBook.audio_length}</p>
              <p className="text-gray-400">by : {dialogBook.authors.join(",")}</p>
              <p>{dialogBook.description}</p>
              {dialogBook.sections.map((section, idx) => (
                <div key={idx} className="py-2">
                  <p className="font-semibold">{section.title}</p>
                  <p>{section.content}</p>
                </div>
              ))}
            </div>
          </div>
        )
      }
      open={!!dialogBook}
      title=""
    />
  );
};

export default DialogBook;
