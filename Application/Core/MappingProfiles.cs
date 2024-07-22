using Application.Activities;
using AutoMapper;
using Domain;

namespace Application.Core
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Activity, Activity>();
            CreateMap<Activity, ActivityDto>()
            .ForMember(x => x.HostUsername, o => o.MapFrom(x => x.Attendees
                .FirstOrDefault(y => y.IsHost).AppUser.UserName));

            CreateMap<ActivityAttendee, Profiles.Profile>()
                .ForMember(x => x.DisplayName, o => o.MapFrom(y => y.AppUser.DisplayName))
                .ForMember(x => x.Username, o => o.MapFrom(y => y.AppUser.UserName))
                .ForMember(x => x.Bio, o => o.MapFrom(y => y.AppUser.Bio));
        }
    }
}