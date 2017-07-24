using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc.Razor;

namespace DotnetVueMvc.Infrastructure
{
    public class FeatureLocationExpander : IViewLocationExpander
    {
        public void PopulateValues(ViewLocationExpanderContext context)
        {
        }
        
        public IEnumerable<string> ExpandViewLocations(ViewLocationExpanderContext context, IEnumerable<string> viewLocations)
        {
            return new string[] {"/Features/{1}/{0}.cshtml", "/Features/Shared/{0}.cshtml"};
        }
    }
}