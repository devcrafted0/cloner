"use client";

import { createFormHookContexts, createFormHook } from "@tanstack/react-form";

export const { fieldContext, formContext, useFieldContext, useFormContext } =
  createFormHookContexts();

export const { useTypedAppFormContext, useAppForm } = createFormHook({
  formContext,
  fieldComponents: {},
  fieldContext,
  formComponents: {},
});
