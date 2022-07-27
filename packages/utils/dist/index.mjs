"use strict";

// src/lib/api/hooks.tsx
import { useState as useState2 } from "react";

// src/lib/api/apiStatus.ts
var IDLE = "IDLE";
var PENDING = "PENDING";
var SUCCESS = "SUCCESS";
var ERROR = "ERROR";
var apiStatuses = ["IDLE", "PENDING", "SUCCESS", "ERROR"];

// src/lib/api/useApiStatus.ts
import { useState, useMemo } from "react";
var capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
var prepareStatuses = (currentStatus) => {
  const statuses = {};
  for (const status of apiStatuses) {
    statuses[`is${capitalize(status.toLowerCase())}`] = status === currentStatus;
  }
  return statuses;
};
var useApiStatus = (currentStatus = IDLE) => {
  const [status, setStatus] = useState(currentStatus);
  const statuses = useMemo(() => prepareStatuses(status), [status]);
  return {
    status,
    setStatus,
    ...statuses
  };
};

// src/lib/api/hooks.tsx
function useApi(fn, config = {}) {
  const { initialData } = config;
  const [data, setData] = useState2(initialData);
  const [error, setError] = useState2();
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
export {
  useApi
};
