/**
 * Audits a drift value and throws if the drift exceeds the budget.
 * @param actual The measured drift (absolute value expected).
 * @returns true if within tolerance, throws otherwise.
 */
export declare function auditPointerDrift(actual: number): true;
