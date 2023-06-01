import './App.css';
import Card from './component/Card';
function App() {

  let data = [
    {
      plan: "Free",
      price: "0",
      user: "Single User",
      userEnabler:true,
      storage: "5GB Storage",
      storageEnabler:true,
      publicProjects: "Unlimited Public Projects",
      publicProjectsEnabler:true,
      communityAccess: "community Access",
      communityAccessEnabler:false,
      privateProjects: "Unlimited Private Projects",
      privateProjectsEnabler:false,
      phoneSupport: "Dedicated Phone Support",
      phoneSupportEnabler:false,
      subDomain: "Free Subdomain",
      subDomainEnabler:false,
      statusReport: "Monthely Status Report",
      statusReportEnabler:false
    },
    {
      plan: "Plus",
      price: "9",
      user: "5 User",
      userEnabler:true,
      storage: "50GB Storage",
      storageEnabler:true,
      publicProjects: "Unlimited Public Projects",
      publicProjectsEnabler:true,
      communityAccess: "community Access",
      communityAccessEnabler:true,
      privateProjects: "Unlimited Private Projects",
      privateProjectsEnabler:true,
      phoneSupport: "Dedicated Phone Support",
      phoneSupportEnabler:true,
      subDomain: "Free Subdomain",
      subDomainEnabler:true,
      statusReport: "Monthely Status Report",
      statusReportEnabler:false
    },
    {
      plan: "Pro",
      price: "49",
      user: "Multiple User",
      userEnabler:true,
      storage: "150GB Storage",
      storageEnabler:true,
      publicProjects: "Unlimited Public Projects",
      publicProjectsEnabler:true,
      communityAccess: "community Access",
      communityAccessEnabler:true,
      privateProjects: "Unlimited Private Projects",
      privateProjectsEnabler:true,
      phoneSupport: "Dedicated Phone Support",
      phoneSupportEnabler:true,
      subDomain: " Free Subdomain",
      subDomainEnabler:true,
      statusReport: "Monthely Status Report",
      statusReportEnabler:true
    }
  ]

  return <>
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {
            data.map((e, i) => {
              return <Card details={e} key={i} />
            })
          }
        </div>
      </div>
    </section>
  </>

}

export default App;
