import * as FirstModules from "./FirstModules";

/// <reference path="./ModulesFolder/FirstNamespace" />

console.log(FirstModules.toggleAgain("toggleAgain")); // External Modules

MyNamespace.testNamespace("testNamespace"); // Namespace

namespace FirstNamespace {
  // Namespace augmentation
  export function testNamespace2(str: string): string {
    return str;
  }
}

FirstNamespace.testNamespace2("testNamepsace2");
