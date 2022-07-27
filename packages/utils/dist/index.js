"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  useApi: () => useApi
});
module.exports = __toCommonJS(src_exports);

// src/lib/api/hooks.tsx
var import_react2 = require("react");

// src/lib/api/apiStatus.ts
var IDLE = "IDLE";
var PENDING = "PENDING";
var SUCCESS = "SUCCESS";
var ERROR = "ERROR";
var apiStatuses = ["IDLE", "PENDING", "SUCCESS", "ERROR"];

// src/lib/api/useApiStatus.ts
var import_react = require("react");
var capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
var prepareStatuses = (currentStatus) => {
  const statuses = {};
  for (const status of apiStatuses) {
    statuses[`is${capitalize(status.toLowerCase())}`] = status === currentStatus;
  }
  return statuses;
};
var useApiStatus = (currentStatus = IDLE) => {
  const [status, setStatus] = (0, import_react.useState)(currentStatus);
  const statuses = (0, import_react.useMemo)(() => prepareStatuses(status), [status]);
  return {
    status,
    setStatus,
    ...statuses
  };
};

// src/lib/api/hooks.tsx
function useApi(fn, config = {}) {
  const { initialData } = config;
  const [data, setData] = (0, import_react2.useState)(initialData);
  const [error, setError] = (0, import_react2.useState)();
  const { status, setStatus, ...statuses } = useApiStatus();
  async function exec(...args) {
    try {
      setStatus(PENDING);
      const data2 = await fn(...args);
      setData(data2);
      setStatus(SUCCESS);
      return {
        data: data2,
        error: null
      };
    } catch (error2) {
      setError(error2);
      setStatus(ERROR);
      return {
        error: error2,
        data: null
      };
    }
  }
  return {
    data,
    setData,
    status,
    setStatus,
    error,
    exec,
    ...statuses
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  useApi
});
