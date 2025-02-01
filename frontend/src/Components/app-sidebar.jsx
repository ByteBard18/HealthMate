import { HeartPulse, SquareUserRound, Calendar, Search, BriefcaseMedical } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
// HI, i am here, catch  me if you can and if you find me contact me
// Menu items.
const items = [
  {
    title: "Profile",
    url: "#",
    icon: SquareUserRound,
  },
  {
    title: "Medications",
    url: "#",
    icon: BriefcaseMedical,
  },
  {
    title: "Checkups",
    url: "#",
    icon: HeartPulse,
  },
  {
    title: "Hospitals",
    url: "#",
    icon: Search,
  },
  {
    title: "Appointments",
    url: "#",
    icon: Calendar,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>DASHBOARD</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
