import { existsSync } from "node:fs";
import path from "node:path";
import { profile } from "@data/profile";

export function hasResumePdf() {
  return existsSync(path.join(process.cwd(), "public", "resume.pdf"));
}

export function getResumeAction() {
  if (hasResumePdf()) {
    return {
      label: "Download resume",
      href: profile.resumePdfHref,
      download: true,
    };
  }

  return {
    label: "Request resume",
    href: profile.resumeRequestHref,
    download: false,
  };
}