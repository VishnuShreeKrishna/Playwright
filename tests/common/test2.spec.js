import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://lims-alpha.elabpro.in/login");

  // goto url
  await page.waitForLoadState("networkidle");
  // await page.pause();

  await page.getByRole("textbox", { name: "Username" }).fill("Market-admin");
  await page.getByRole("textbox", { name: "Password" }).fill("Marketing@123");
  await page.getByRole("button", { name: "Login" }).click();
  await page.waitForLoadState("networkidle");

  await page.getByRole("link", { name: "Registration", exact: true }).click();
  await page.locator('div[class="w-100 mr-0"] ul li a').first().click();
  console.log("done");

  

  //   await page.getByRole('link', { name: 'Registration' }).click();
  await page.waitForLoadState("networkidle");

  await page
    .getByRole("spinbutton", { name: "Mobile Number" })
    .fill("98643986476");
  await page
    .getByRole("textbox", { name: "First Name" })
    .fill("DUMMY  VISHNU AUTo");
  await page.getByRole("textbox", { name: "Y", exact: true }).fill("23");
  await page.getByRole("textbox", { name: "Middle Name" }).fill("TESt");
  await page.getByRole("textbox", { name: "Last Name" }).fill("LAST");
  await page.getByRole("textbox", { name: "Referred Doctor" }).fill("r");

  await page.pause();

  await page.locator('[id="DoctorName"]').fill("rakesh");

  await page.getByText("rakesh sukla").first().click();
  await page.getByRole("textbox", { name: "M", exact: true }).click();
  await page.getByRole("textbox", { name: "M", exact: true }).fill("12");
  await page.getByRole("textbox", { name: "D", exact: true }).click();
  await page.getByRole("textbox", { name: "D", exact: true }).fill("0");
  await page.getByRole("textbox", { name: "Y", exact: true }).click();
  await page.getByRole("textbox", { name: "Y", exact: true }).fill("79");
  await page.locator('[id="testSearch"]').click();
  await page
    .getByRole("textbox", { name: "Type TestName For Add Test" })
    .fill("sgot");
  await page
    .getByRole("textbox", { name: "Type TestName For Add Test" })
    .press("Enter");
  await page
    .getByRole("textbox", { name: "Type TestName For Add Test" })
    .fill("blood");
  await page.getByText("~Blood Urea Nitrogen (BUN)").click();
  await page.locator('[id="testSearch"]').click();
  await page
    .getByRole("textbox", { name: "Type TestName For Add Test" })
    .fill("urine");
  await page.getByText("~Protein, Urine").click();
  await page.locator('[id="testSearch"]').click();
  await page
    .getByRole("textbox", { name: "Type TestName For Add Test" })
    .fill("total ige");
  await page.getByText("~Immunoglobulin IgE (Total IgE)").click();
  await page.locator('[id="testSearch"]').click();
  await page
    .getByRole("textbox", { name: "Type TestName For Add Test" })
    .fill("urine ");
  await page.getByText("~Urine Glucose").click();
  await page.locator('[id="testSearch"]').click();
  await page
    .getByRole("textbox", { name: "Type TestName For Add Test" })
    .fill("plate");
  await page.getByText("~Platelet").click();
  await page
    .getByRole("textbox", { name: "Type TestName For Add Test" })
    .dblclick();
  await page
    .getByRole("textbox", { name: "Type TestName For Add Test" })
    .fill("glucose u");
  await page.getByText("~Glucose Random, Urine").click();
  await page.getByText("Discount Amount", { exact: true }).click();
  await page.getByRole("textbox", { name: "Discount Amount" }).fill("109");
  await page
    .getByRole("row", { name: "1  30037155 Aspartate" })
    .locator('input[name="Status"]')
    .check();
  await page
    .getByRole("row", { name: "2  30037215 Blood Urea" })
    .locator('input[name="Status"]')
    .check();
  await page.getByPlaceholder("0.00").click();
  await page.getByPlaceholder("0.00").fill("1200");
  await page.locator('select[name="DiscountApprovedBy"]').selectOption("801");
});
