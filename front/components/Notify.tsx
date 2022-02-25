import React, { useEffect } from "react";
import NotificationSystem from "react-notification-system";

export default function Notify() {
  const ref = React.createRef();
  const [title, setTitle] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [uid, setUid] = React.useState(0);
  const [autoDismiss, setAutoDismiss] = React.useState(5);

  useEffect(() => {
    /* @ts-ignore */
    ref.current.addNotification({
      title,
      message,
      level: "info",
      position: "tl",
      uid,
      autoDismiss,
      action: {
        label: "今の説明のところがわかりません",
        // callback: () => window.open("https://twitter.com/crohaco"),
      },
    });
    setUid(uid + 1);
  }, []);

  return (
    <div className="">
      {/* @ts-ignore */}
      <NotificationSystem ref={ref} />
    </div>
  );
}
