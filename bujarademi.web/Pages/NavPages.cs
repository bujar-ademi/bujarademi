using Microsoft.AspNetCore.Mvc.Rendering;
using System;
using System.Linq;

namespace bujarademi.web.Pages
{
    public static class NavPages
    {
        public static string PageNavClass(ViewContext viewContext, params string[] pages)
        {
            var activePage = viewContext.ViewData["ActivePage"] as string ?? System.IO.Path.GetFileNameWithoutExtension(viewContext.ActionDescriptor.DisplayName);
            if (pages.Contains(activePage))
            {
                return "active";
            }
            return null;
        }

        public static string MenuIsOpen(ViewContext viewContext, params string[] pages)
        {
            var activePage = viewContext.ViewData["ActivePage"] as string ?? System.IO.Path.GetFileNameWithoutExtension(viewContext.ActionDescriptor.DisplayName);
            if (pages.Contains(activePage)) {
                return "open";
            }
            return null;
        }

        public static string Navigate(ViewContext viewContext, string href)
        {
            var activePage = viewContext.ViewData["ActivePage"] as string ?? System.IO.Path.GetFileNameWithoutExtension(viewContext.ActionDescriptor.DisplayName);
            if (activePage == "Index")
            {
                return href;
            } else
            {
                return "/" + href;
            }
        }
    }
}
