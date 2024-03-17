import { useState, FC, ReactNode, CSSProperties } from "react";
import StarSvg from "./Star.svg";
import style from "./dynamic-rating.module.css";

interface DynamicRatingProps {
  fill?: string;
  SvgIcon?: ReactNode;
  containerProps?: CSSProperties;
  svgProps?: CSSProperties;
  inputProps?: CSSProperties;
  containerClassName?: string;
  svgClassName?: string;
  inputClassName?: string;
  ratingLength?: number;
  onChangeValue?: (value: any) => void;
  value?: number;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  gap?: string;
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
}

const DynamicRating: FC<DynamicRatingProps> = ({
  fill,
  SvgIcon = <StarSvg />,
  containerProps,
  svgProps,
  inputProps,
  containerClassName,
  svgClassName,
  inputClassName,
  ratingLength = 5,
  onChangeValue,
  value,
  size,
  gap = "0.5rem",
  min = 0,
  max = 1,
  step = 0.25,
  defaultValue,
}) => {
  const [clipPathRaiting, setClipPathRating] = useState(0);

  let printStars = [];

  if (value === 0) value = 0.001;

  for (let i = 1; i <= ratingLength; i++) {
    printStars.push(
      <div key={i} style={{ position: "relative" }}>
        <div
          className={`${style.emptySvg} ${svgClassName}`}
          style={{
            fill,
            ...svgProps,
          }}
        >
          {SvgIcon}
        </div>
        <div
          className={`${
            size === "xs"
              ? style.xs
              : size === "sm"
              ? style.sm
              : size === "md"
              ? style.md
              : size === "lg"
              ? style.lg
              : size === "xl" && style.xl
          } ${svgClassName}`}
          style={{
            fill,
            clipPath: `${
              i <= (value || clipPathRaiting)
                ? "inset(0 0% 0 0)"
                : i - 1 < (value || clipPathRaiting) &&
                  (value || clipPathRaiting) < i
                ? `inset(0 ${
                    100 - ((value || clipPathRaiting) % 1) * 100
                  }% 0 0)`
                : "inset(0 100% 0 0)"
            }`,
            ...svgProps,
          }}
        >
          {SvgIcon}
        </div>
        <input
          className={`${style.hideThumb} ${inputClassName}`}
          id={`star${i}`}
          onChange={(e) => {
            setClipPathRating(i + +e.target.value - 1);
            onChangeValue && onChangeValue(i + +e.target.value - 1);
          }}
          defaultValue={defaultValue}
          min={min}
          max={max}
          step={step}
          type="range"
          value={value}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            cursor: "pointer",
            appearance: "none",
            backgroundColor: "transparent",
            ...inputProps,
          }}
        />
      </div>
    );
  }

  return (
    <div
      className={containerClassName}
      style={{ display: "flex", gap: gap, ...containerProps }}
    >
      {printStars}
    </div>
  );
};

export default DynamicRating;
