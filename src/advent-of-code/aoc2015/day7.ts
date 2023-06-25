import { readFile, createFilePathToData } from "../utils";

type InstructionOp = "OR" | "AND" | "LSHIFT" | "RSHIFT" | "NOT";
type Operation = {
  op?: InstructionOp;
  size: number;
  lhs?: string;
  rhs?: string;
};

type Instruction = {
  operation: Operation;
  assignTo: string;
};

export const content = readFile(createFilePathToData(2015, 7));

function isNumber(value: string): boolean {
  if (!value) {
    return false;
  }

  return !Number.isNaN(Number(value));
}

function parseOperation(operation: string): Operation {
  const parts = operation.split(" ");
  const size = parts.length;

  if (size === 1) {
    return {
      size,
      lhs: parts[0],
    };
  }

  if (size === 2) {
    return {
      op: "NOT",
      size: 2,
      lhs: parts[1],
    };
  }

  return {
    size,
    op: parts[1] as InstructionOp,
    lhs: parts[0],
    rhs: parts[2],
  };
}

function doop(a: number, b: number, op?: InstructionOp): number {
  if (!op) {
    return 0;
  }

  switch (op) {
  case "AND":
    return a & b;
  case "OR":
    return a | b;
  case "LSHIFT":
    return a << b;
  case "RSHIFT":
    return a >> b;
  }

  // NOTE: Unable to reach here
  return 0;
}

function parseData(data: string): Instruction[] {
  return data
    .split("\n")
    .filter(Boolean)
    .map((line) => {
      const [operation, assignTo] = line.split(" -> ");

      return { assignTo, operation: parseOperation(operation) };
    });
}

export function part1(data: string): number {
  const instructions = parseData(data);
  const identifiers = new Map<string, number>();

  // Think of instructions as circular buffer that we should clear.
  while (instructions.length > 0) {
    const front = instructions.shift();
    if (!front) {
      throw new Error("Why is this empty?");
    }

    if (front.operation.size === 1) {
      const key = front.operation?.lhs ?? "";
      if (identifiers.has(key)) {
        const value = identifiers.get(key) ?? 0;
        identifiers.set(front.assignTo, value);
      } else {
        // if the key doesn't exist, we should check if this is a number
        if (isNumber(key)) {
          identifiers.set(front.assignTo, Number(key));
        } else {
          instructions.push(front);
        }
      }
    } else if (front.operation.size === 2) {
      const key = front.operation?.lhs ?? "";
      if (identifiers.has(key)) {
        const value = identifiers.get(key) ?? 0;
        identifiers.set(front.assignTo, ~value);
      } else {
        if (isNumber(key)) {
          identifiers.set(front.assignTo, ~Number(key));
        } else {
          instructions.push(front);
        }
      }
    } else {
      const lhs = front.operation?.lhs ?? "";
      const rhs = front.operation?.rhs ?? "";

      const isLHSANumber = isNumber(lhs);
      const isRHSANumber = isNumber(rhs);

      if (identifiers.has(lhs) && identifiers.has(rhs)) {
        const lhsValue = identifiers.get(lhs) ?? 0;
        const rhsValue = identifiers.get(rhs) ?? 0;
        identifiers.set(
          front.assignTo,
          doop(lhsValue, rhsValue, front.operation?.op)
        );
      } else if (
        (isLHSANumber && identifiers.has(rhs)) ||
        (isRHSANumber && identifiers.has(lhs))
      ) {
        const lhsValue = isLHSANumber ? Number(lhs) : identifiers.get(lhs) ?? 0;
        const rhsValue = isRHSANumber ? Number(rhs) : identifiers.get(rhs) ?? 0;
        identifiers.set(
          front.assignTo,
          doop(lhsValue, rhsValue, front.operation?.op)
        );
      } else {
        instructions.push(front);
      }
    }
  }

  return identifiers.get("a") ?? 0;
}

// NOTE: This was my answer from part 1
const B_INJECTED_SIGNAL = 3176;

export function part2(data: string): number {
  const instructions = parseData(data);
  const identifiers = new Map<string, number>();

  // Think of instructions as circular buffer that we should clear.
  while (instructions.length > 0) {
    const front = instructions.shift();
    if (!front) {
      throw new Error("Why is this empty?");
    }

    if (front.operation.size === 1) {
      if (front.assignTo === "b") {
        identifiers.set("b", B_INJECTED_SIGNAL);
      } else {
        const key = front.operation?.lhs ?? "";
        if (identifiers.has(key)) {
          const value = identifiers.get(key) ?? 0;
          identifiers.set(front.assignTo, value);
        } else {
          // if the key doesn't exist, we should check if this is a number
          if (isNumber(key)) {
            identifiers.set(front.assignTo, Number(key));
          } else {
            instructions.push(front);
          }
        }
      }
    } else if (front.operation.size === 2) {
      const key = front.operation?.lhs ?? "";
      if (identifiers.has(key)) {
        const value = identifiers.get(key) ?? 0;
        identifiers.set(front.assignTo, ~value);
      } else {
        if (isNumber(key)) {
          identifiers.set(front.assignTo, ~Number(key));
        } else {
          instructions.push(front);
        }
      }
    } else {
      const lhs = front.operation?.lhs ?? "";
      const rhs = front.operation?.rhs ?? "";

      const isLHSANumber = isNumber(lhs);
      const isRHSANumber = isNumber(rhs);

      if (identifiers.has(lhs) && identifiers.has(rhs)) {
        const lhsValue = identifiers.get(lhs) ?? 0;
        const rhsValue = identifiers.get(rhs) ?? 0;
        identifiers.set(
          front.assignTo,
          doop(lhsValue, rhsValue, front.operation?.op)
        );
      } else if (
        (isLHSANumber && identifiers.has(rhs)) ||
        (isRHSANumber && identifiers.has(lhs))
      ) {
        const lhsValue = isLHSANumber ? Number(lhs) : identifiers.get(lhs) ?? 0;
        const rhsValue = isRHSANumber ? Number(rhs) : identifiers.get(rhs) ?? 0;
        identifiers.set(
          front.assignTo,
          doop(lhsValue, rhsValue, front.operation?.op)
        );
      } else {
        instructions.push(front);
      }
    }
  }

  return identifiers.get("a") ?? 0;
}
