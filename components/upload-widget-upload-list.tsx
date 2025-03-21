import React from "react";
import { useUploads } from "../store/uploads";
import { UploadWidgetUploadItem } from "./upload-widget-upload-item";
import * as ScrollArea from "@radix-ui/react-scroll-area"

export function UploadWidgetUploadList(){
  const uploads = useUploads(store => store.uploads)
  const isUploadListEmpty = uploads.size === 0

  return (
    <div className="px-3 flex flex-col gap-3">
      <span className="text-xs font-medium">Uploaded files{' '}
        <span className="text-zinc-400">({uploads.size})</span>
      </span>

      <ScrollArea.Root className="overflow-hidden" type="scroll">
        <ScrollArea.Viewport className="h-[220px]">
          {isUploadListEmpty ? (
            <span className="text-xs text-zinc-400">No uploads added</span>
          ) : (
            <div className="flex flex-col gap-2">
              {Array.from(uploads.entries()).map(([uploadId, upload]) => {
                return <UploadWidgetUploadItem key={uploadId} upload={upload} uploadId={uploadId}/>
              })}
            </div>
          )}
        </ScrollArea.Viewport>

        <ScrollArea.Scrollbar
          className="ScrollAreaScrollbar"
          orientation="vertical"
        >
          <ScrollArea.Thumb className="ScrollAreaThumb" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </div>
  )
}
