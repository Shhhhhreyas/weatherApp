import React from "react";

export default function TwoDetailsVariant({
  text1,
  text2,
  text3,
  Icon,
  iconColor,
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        marginBottom: 16,
        color: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Icon style={{ marginRight: 16, color: iconColor }} />
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              marginBottom: 8,
            }}
          >
            {text1}
          </div>
          <div>{text3}</div>
        </div>
      </div>
      {text2}
    </div>
  );
}
