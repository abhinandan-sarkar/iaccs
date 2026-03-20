"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

export type DocumentType = "announcements" | "notices" | "reports";

type DocumentItem = {
  title: string;
  description?: string;
  url?: string | null;
  fileName?: string;
  createdAt?: string | null;
  updatedAt?: string;
};

type DocumentsResponse = {
  success: boolean;
  type?: DocumentType;
  total?: number;
  limit?: number;
  offset?: number;
  items?: DocumentItem[];
  message?: string;
};

function getDocumentsBaseUrl() {
  const host = window.location.hostname;
  if (host === "localhost" || host === "127.0.0.1") {
    return "http://localhost/iaccs/documents_list.php";
  }
  if (host.endsWith("agcinfosystem.com")) {
    return "https://iaccs.agcinfosystem.com/documents_list.php";
  }
  return "/documents_list.php";
}

function buildDocumentsUrl(params: {
  type: DocumentType;
  limit?: number;
  offset?: number;
}) {
  const baseUrl = getDocumentsBaseUrl();
  const search = new URLSearchParams({ type: params.type });
  if (typeof params.limit === "number") search.set("limit", String(params.limit));
  if (typeof params.offset === "number") search.set("offset", String(params.offset));
  return `${baseUrl}?${search.toString()}`;
}

export default function DocumentsList(props: {
  type: DocumentType;
  limit?: number;
  showMoreHref?: string;
  showDescription?: boolean;
  className?: string;
  listClassName?: string;
}) {
  const limit = props.limit ?? 10;
  const [items, setItems] = useState<DocumentItem[] | null>(null);
  const [hasError, setHasError] = useState(false);

  const url = useMemo(() => {
    if (typeof window === "undefined") return "";
    return buildDocumentsUrl({ type: props.type, limit });
  }, [props.type, limit]);

  useEffect(() => {
    if (!url) return;

    let cancelled = false;
    (async () => {
      try {
        setHasError(false);
        const res = await fetch(url, { method: "GET", cache: "no-store" });
        const json = (await res.json()) as DocumentsResponse;
        if (!res.ok || !json?.success) throw new Error("Bad response");
        if (cancelled) return;
        setItems(Array.isArray(json.items) ? json.items : []);
      } catch {
        if (!cancelled) setHasError(true);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [url]);

  const showMoreHref = props.showMoreHref;
  const showMore = Boolean(showMoreHref) && (items?.length ?? 0) > 0;

  if (hasError) {
    return (
      <div className={props.className}>
        <div className="text-center text-gray-700">No Records found</div>
      </div>
    );
  }

  if (items === null) {
    return (
      <div className={props.className}>
        <div className="text-center text-gray-500">Loading...</div>
      </div>
    );
  }

  return (
    <div className={props.className}>
      {items.length === 0 ? (
        <div className="text-center text-gray-700">No Records found</div>
      ) : (
        <ul className={props.listClassName ?? "space-y-3 text-base md:text-lg"}>
          {items.map((item, idx) => (
            <li
              key={`${item.url ?? item.fileName ?? item.title}-${idx}`}
              className="flex items-center justify-between gap-3"
            >
              <div className="text-left break-words">
                <div className="text-gray-800">&gt; {item.title}</div>
                {props.showDescription && item.description?.trim() ? (
                  <div className="mt-1 text-sm text-gray-600">
                    {item.description}
                  </div>
                ) : null}
              </div>

              {item.url ? (
                <a
                  href={item.url}
                  download
                  className="shrink-0 px-4 py-1 rounded-full bg-[#38b6ff] border border-black text-sm font-semibold hover:opacity-90 transition"
                >
                  Download
                </a>
              ) : null}
            </li>
          ))}
        </ul>
      )}

      {showMore && showMoreHref && (
        <div className="mt-4 text-center">
          <Link href={showMoreHref} className="text-blue-600 underline">
            Show more
          </Link>
        </div>
      )}
    </div>
  );
}
