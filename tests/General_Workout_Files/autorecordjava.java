import com.microsoft.playwright.*;
import com.microsoft.playwright.options.*;
import static com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat;
import java.util.*;

public class Example {
  public static void main(String[] args) {
    try (Playwright playwright = Playwright.create()) {
      Browser browser = playwright.chromium().launch(new BrowserType.LaunchOptions()
        .setHeadless(false));
      BrowserContext context = browser.newContext();
      Page page = context.newPage();
      page.navigate("https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3D%2527https%253A%252F%252Fdemoblaze.com%252F%26oq%3D%2527https%253A%252F%252Fdemoblaze.com%252F%26gs_lcrp%3DEgZjaHJvbWUyBggAEEUYOdIBCTEwMTI1ajBqMqgCALACAA%26sourceid%3Dchrome%26ie%3DUTF-8%26sei%3D7r4favXaD7ml2roP9YrjqAc&q=EgR8L6qpGO79_tAGIjC1e0fuyxDtm6dVAO4WuhlnukKqtINWKgtmZb9Qa-mkygbdNCqbcFMwi0mljtLJil4yAVJaAUM");
      page.close();
    }
  }
}